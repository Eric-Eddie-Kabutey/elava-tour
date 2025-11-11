'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Checkbox } from "@/components/ui/checkbox"
import type { CheckedState } from "@radix-ui/react-checkbox"
import { TourDate } from '@/data/tour-dates'
import { cn } from '@/lib/utils'

// --- TYPE DEFINITIONS ---
type FullTourDetails = TourDate & { destinationName: string; year: number };
type SelectedPackages = Record<string, number>;
type PaymentOption = 'deposit' | 'full';

type BuyerInfo = { firstName: string; lastName: string; phone: string; email: string; };
type ParticipantInfo = { firstName: string; lastName: string; };
type FormErrors = Partial<Record<keyof BuyerInfo | `p${number}_firstName` | `p${number}_lastName`, string>>;

// --- HELPER to format currency ---
const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);


//================================================================================
// PACKAGE SELECTION SUB-COMPONENT
//================================================================================
const PackageSelectionStep = ({
  tourDetails,
  selectedPackages,
  setSelectedPackages,
  onContinue,
  paymentOption,
  setPaymentOption,
}: {
  tourDetails: FullTourDetails;
  selectedPackages: SelectedPackages;
  setSelectedPackages: Dispatch<SetStateAction<SelectedPackages>>;
  onContinue: () => void;
  paymentOption: PaymentOption;
  setPaymentOption: Dispatch<SetStateAction<PaymentOption>>;
}) => {
    return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
			<div className='lg:col-span-2 space-y-6'>
				<h3 className='text-2xl font-semibold text-green-opaque'>Select Packages</h3>
				{tourDetails.pricing.map((pkg) => (
					<div key={pkg.id} className='border-b pb-6'>
						<div className='flex justify-between items-start'>
							<div>
								<h4 className='text-lg font-semibold'>{pkg.title}</h4>
								{pkg.originalPrice && <span className='text-sm text-yellow-opaque-hover'>{(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100).toFixed(0)}% off</span>}
							</div>
							<div className='text-right'>
								<p className='text-lg font-bold'>{formatCurrency(pkg.price)}</p>
								<p className='text-sm text-gray-500'>Deposit: {formatCurrency(pkg.deposit)}</p>
							</div>
						</div>
						<div className='flex items-center gap-4 mt-2'>
							<Select
								value={selectedPackages[pkg.id]?.toString() || '0'}
								onValueChange={(value) => setSelectedPackages((prev) => ({ ...prev, [pkg.id]: parseInt(value, 10) }))}
							>
								<SelectTrigger className='w-[80px]'><SelectValue placeholder='0' /></SelectTrigger>
								<SelectContent>{[...Array(10).keys()].map(i => <SelectItem key={i} value={i.toString()}>{i}</SelectItem>)}</SelectContent>
							</Select>
							<p className='text-sm text-green-opaque'>{pkg.description}</p>
						</div>
					</div>
				))}
				<div className='bg-yellow-opaque text-white p-6 rounded-lg mt-8'>
					<h4 className='font-bold mb-2'>Payment Option</h4>
					<RadioGroup value={paymentOption} onValueChange={(value: string) => setPaymentOption(value as PaymentOption)} className='flex items-center gap-4'>
						<div className='flex items-center space-x-2'>
							<RadioGroupItem value='full' id='pay-full' className='border-white text-white' />
							<Label htmlFor='pay-full'>Pay full amount</Label>
						</div>
                        <div className='flex items-center space-x-2'>
							<RadioGroupItem value='deposit' id='pay-deposit' className='border-white text-white' />
							<Label htmlFor='pay-deposit'>Pay deposit</Label>
						</div>
					</RadioGroup>
					<Button onClick={onContinue} className='bg-white text-yellow-opaque hover:bg-green-opaque hover:text-yellow-opaque mt-4'>Continue</Button>
				</div>
			</div>
			<BookingSummary tourDetails={tourDetails} selectedPackages={selectedPackages} paymentOption={paymentOption} />
		</div>
	)
};


//================================================================================
// PARTICIPANT INFO SUB-COMPONENT
//================================================================================
const ParticipantInfoStep = ({    
    buyer, setBuyer,
    participants, setParticipants,
    onContinue,
}: {
    selectedPackages: SelectedPackages,
    buyer: BuyerInfo, setBuyer: Dispatch<SetStateAction<BuyerInfo>>,
    participants: ParticipantInfo[], setParticipants: Dispatch<SetStateAction<ParticipantInfo[]>>,
    onContinue: () => void,
}) => {
    const [errors, setErrors] = useState<FormErrors>({});

    const handleValidation = () => {
        const newErrors: FormErrors = {};
        if (!buyer.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!buyer.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!buyer.email.trim() || !/\S+@\S+\.\S+/.test(buyer.email)) newErrors.email = "A valid email is required.";
        
        participants.forEach((p, i) => {
            if (!p.firstName.trim()) newErrors[`p${i}_firstName`] = `Participant ${i + 1}'s first name is required.`;
            if (!p.lastName.trim()) newErrors[`p${i}_lastName`] = `Participant ${i + 1}'s last name is required.`;
        });

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onContinue();
        }
    };
    
    const handleParticipantChange = (index: number, field: keyof ParticipantInfo, value: string) => {
        const updatedParticipants = [...participants];
        updatedParticipants[index] = { ...updatedParticipants[index], [field]: value };
        setParticipants(updatedParticipants);
    };

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
			<div className='lg:col-span-2'>
				<h3 className='text-2xl font-semibold mb-4'>Buyer Information</h3>
				<div className='space-y-4 border p-4 rounded-lg'>
                    <div>
					    <Input placeholder='First Name *' value={buyer.firstName} onChange={e => setBuyer({...buyer, firstName: e.target.value})} className={cn(errors.firstName && 'border-yellow-opaque')} />
                        {errors.firstName && <p className="text-yellow-opaque text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
					    <Input placeholder='Last Name *' value={buyer.lastName} onChange={e => setBuyer({...buyer, lastName: e.target.value})} className={cn(errors.lastName && 'border-yellow-opaque')} />
                        {errors.lastName && <p className="text-yellow-opaque text-sm mt-1">{errors.lastName}</p>}
                    </div>
					<Input placeholder='Phone Number' value={buyer.phone} onChange={e => setBuyer({...buyer, phone: e.target.value})} />
                    <div>
					    <Input placeholder='Email *' value={buyer.email} onChange={e => setBuyer({...buyer, email: e.target.value})} className={cn(errors.email && 'border-yellow-opaque')} />
                        {errors.email && <p className="text-yellow-opaque text-sm mt-1">{errors.email}</p>}
                    </div>
				</div>
				<h3 className='text-2xl font-semibold mt-8 mb-4'>
					Participant Information ({participants.length})
				</h3>
				{participants.map((_, i) => (
					<div key={i} className='space-y-4 border p-4 rounded-lg mt-4'>
						<p className='font-semibold'>Participant {i + 1}</p>
						<div>
                            <Input placeholder='First Name *' value={participants[i].firstName} onChange={e => handleParticipantChange(i, 'firstName', e.target.value)} className={cn(errors[`p${i}_firstName`] && 'border-yellow-opaque')} />
                            {errors[`p${i}_firstName`] && <p className="text-yellow-opaque text-sm mt-1">{errors[`p${i}_firstName`]}</p>}
                        </div>
                        <div>
						    <Input placeholder='Last Name *' value={participants[i].lastName} onChange={e => handleParticipantChange(i, 'lastName', e.target.value)} className={cn(errors[`p${i}_lastName`] && 'border-yellow-opaque')} />
                            {errors[`p${i}_lastName`] && <p className="text-yellow-opaque text-sm mt-1">{errors[`p${i}_lastName`]}</p>}
                        </div>
					</div>
				))}
				<Button onClick={handleValidation} className='bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque mt-6'>
					Next
				</Button>
			</div>			
		</div>
	)
}


//================================================================================
// TERMS AND CONDITIONS SUB-COMPONENT
//================================================================================
const TermsAndConditionsStep = ({
    onConfirm,
    buyerName,
}: {
    onConfirm: () => void;
    buyerName: string;
}) => {
    const [isChecked, setIsChecked] = useState(false);
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).replace(/,/g, '');

    const handleCheckedChange = (checked: CheckedState) => {
        setIsChecked(checked === true);
    };

    return (
		<div className="max-w-3xl mx-auto">
			<h3 className="text-2xl font-semibold text-green-opaque mb-4">Terms & Conditions</h3>
			<div className="space-y-4 text-gray-700">
				<p>It is your sole responsibility to obtain any necessary documentation for travel within the appropriate timeframe prior to departure. If your trip is cancelled and/or you are unable to travel because you have failed to secure the necessary travel documentation, your payments will not be reimbursed.</p>
				<h4 className="font-semibold pt-2">Visas</h4>
				<p>Some countries require a visa to enter. Without a valid visa, you may be denied entry into the country. You can find out if you need a visa by visiting the embassy website of the country you&apos;ll be traveling to. You may also contact us with any questions.</p>
			</div>

			<div className="flex items-center space-x-2 mt-8">
				<Checkbox id="terms" checked={isChecked} onCheckedChange={handleCheckedChange} />
				<Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
					By ticking the box, you agree to the Terms and Conditions of this contract.
				</Label>
			</div>

			<div className="mt-10 space-y-6">
                <div className="border-b-2 border-yellow-opaque pb-1">
                    <p className="font-serif text-lg text-gray-800 italic">{isChecked ? buyerName : ''}</p>
                    <p className="text-sm text-gray-500">Signed</p>
                </div>
                <div className="border-b-2 border-yellow-opaque pb-1">
                    <p className="font-mono text-lg text-gray-800">{isChecked ? today : ''}</p>
                    <p className="text-sm text-gray-500">Date</p>
                </div>
			</div>

			<Button onClick={onConfirm} disabled={!isChecked} className="bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque mt-10">
                Ok
            </Button>
		</div>
    );
};


//================================================================================
// BOOKING SUMMARY SUB-COMPONENT
//================================================================================
const BookingSummary = ({
    tourDetails,
    selectedPackages,
    paymentOption,
    step = 1,
    promoCode, setPromoCode,
    handleApplyPromoCode,
    discount, promoError
}: {
    tourDetails: FullTourDetails;
    selectedPackages: SelectedPackages;
    paymentOption?: PaymentOption;
    step?: number;
    promoCode?: string;
    setPromoCode?: Dispatch<SetStateAction<string>>;
    handleApplyPromoCode?: () => void;
    discount?: number;
    promoError?: string;
}) => {
	const [subtotal, setSubtotal] = useState(0);
    const [totalDeposit, setTotalDeposit] = useState(0);

	useEffect(() => {
		let price = 0;
		let deposit = 0;
		tourDetails.pricing.forEach((pkg) => {
			const quantity = selectedPackages[pkg.id] || 0;
			if (quantity > 0) {
				price += pkg.price * quantity;
				deposit += pkg.deposit * quantity;
			}
		});
		setSubtotal(price);
        setTotalDeposit(deposit);
	}, [selectedPackages, tourDetails.pricing]);

    const totalPrice = subtotal - (discount || 0);
    const dueNow = paymentOption === 'deposit' ? totalDeposit : totalPrice;

	return (
		<div className='bg-gray-50 p-6 pb-32 md:pb-6 rounded-lg h-fit'>
			<h3 className='text-xl font-semibold border-b pb-3 mb-3'>Your Booking</h3>
			{step >= 2 && setPromoCode && handleApplyPromoCode && (
				<div className='flex flex-col gap-2 mb-4'>
                    <div className="flex gap-2">
					    <Input placeholder='Promo Code' value={promoCode} onChange={e => setPromoCode(e.target.value)} />
					    <Button onClick={handleApplyPromoCode} className='bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque'>Apply</Button>
                    </div>
                    {promoError && <p className="text-yellow-opaque text-sm">{promoError}</p>}
                    {discount && discount > 0 && <p className="text-green-600 text-sm">Promo code applied!</p>}
				</div>
			)}
			{step >= 2 && Object.entries(selectedPackages).map(([key, value]) => {
                if (typeof value === 'number' && value > 0) {
                    const pkg = tourDetails.pricing.find((p) => p.id === key);
                    if (!pkg) return null;
                    return (
                        <div key={key} className='flex justify-between items-center text-sm mb-2'>
                            <div>
                                <p className="font-semibold">{pkg.title}</p>
                                <p className="text-yellow-opaque">{value}x participant</p>
                            </div>
                            <p>{formatCurrency(pkg.price * value)}</p>
                        </div>
                    )
                }
                return null;
            })}

			<div className='space-y-2 border-t pt-3'>
                <div className='flex justify-between text-gray-600'><p>Installment Fee</p><p>{formatCurrency(0)}</p></div>
                <div className='flex justify-between text-gray-600'><p>Processing Fee</p><p>{formatCurrency(0)}</p></div>
                {discount && discount > 0 && (
                    <div className="flex justify-between text-green-600"><p>Discount</p><p>-{formatCurrency(discount)}</p></div>
                )}
				<div className='flex justify-between font-bold'><p>Total Price</p><p>{formatCurrency(totalPrice)}</p></div>
			</div>
			<div className='flex justify-between font-bold text-lg mt-4 border-t pt-4'>
				<p>Due Now</p>
				<p>{formatCurrency(dueNow)}</p>
			</div>
		</div>
	)
}


//================================================================================
// MAIN BOOKING MODAL COMPONENT
//================================================================================
export function BookingModal({
	isOpen,
	onClose,
	tourDetails,
}: {
    isOpen: boolean;
    onClose: () => void;
    tourDetails: FullTourDetails;
}) {
	const [step, setStep] = useState(1);
	const [selectedPackages, setSelectedPackages] = useState<SelectedPackages>({});
    const [paymentOption, setPaymentOption] = useState<PaymentOption>('full');
    
    // State for Step 2
    const [buyerInfo, setBuyerInfo] = useState<BuyerInfo>({ firstName: '', lastName: '', phone: '', email: '' });
    const [participants, setParticipants] = useState<ParticipantInfo[]>([]);
    
    // State for Promo Code
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [promoError, setPromoError] = useState('');

    // Sync participants array with selected quantities whenever selection changes
    useEffect(() => {
        const totalParticipants = Object.values(selectedPackages).reduce((acc, val) => acc + val, 0);
        setParticipants(currentParticipants => {
            const newParticipants = [...currentParticipants];
            while (newParticipants.length < totalParticipants) {
                newParticipants.push({ firstName: '', lastName: '' });
            }
            return newParticipants.slice(0, totalParticipants);
        });
    }, [selectedPackages]);

	const handleClose = () => {
		onClose();
		// Reset all state after a delay for the closing animation
		setTimeout(() => {
			setStep(1);
			setSelectedPackages({});
            setPaymentOption('full');
            setBuyerInfo({ firstName: '', lastName: '', phone: '', email: '' });
            setParticipants([]);
            setPromoCode('');
            setDiscount(0);
            setPromoError('');
		}, 300);
	}

    const handleApplyPromoCode = () => {
        setPromoError('');
        setDiscount(0);
        if (promoCode.toUpperCase() === 'DISCOUNT10') { // Example promo code
            const subtotal = tourDetails.pricing.reduce((acc, pkg) => acc + (pkg.price * (selectedPackages[pkg.id] || 0)), 0);
            setDiscount(subtotal * 0.10); // Apply 10% discount
        } else if (promoCode) {
            setPromoError('Invalid promo code.');
        }
    };

    const handleBookingConfirm = () => {
        console.log("--- BOOKING SUBMITTED ---");
        console.log("Selected Packages:", selectedPackages);
        console.log("Payment Option:", paymentOption);
        console.log("Buyer Info:", buyerInfo);
        console.log("Participants:", participants);
        console.log("Promo Code:", promoCode);
        console.log("Discount:", discount);
        // Here you would typically make an API call to your backend
        alert("Booking Confirmed! (Check the browser console for details)");
        handleClose();
    };

    const canGoToStep2 = Object.values(selectedPackages).some(qty => qty > 0);

	return (
		<Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose() }}>
			<DialogContent 
                onInteractOutside={(e) => e.preventDefault()}               
                className={cn(
                    "w-[95vw] max-w-5xl p-0", 
                    "grid grid-rows-[auto_1fr] max-h-[85vh] lg:max-h-[95vh]"
                )}
            >
				{/* --- HEADER --- */}                
				<div className='bg-yellow-opaque text-white py-6 px-4 md:px-10 relative'>
					<div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
						<div className='self-start md:self-center mb-2 md:mb-0'>
							<Image
								src={tourDetails.heroImageUrl}
								alt='Tour Logo'
								width={60}
								height={60}
								className='bg-white rounded-full w-16 h-16 object-cover'
							/>
						</div>
						<div>
							<h2 className='text-xl md:text-2xl font-bold'>{`MIT - ${tourDetails.destinationName} NYE Special`}</h2>
                            <p className="text-base md:text-lg font-semibold">{tourDetails.displayDate}</p>
							<div className='flex items-center flex-wrap gap-x-4 gap-y-1 text-base mt-2'>
                                <button onClick={() => setStep(1)} disabled={step === 1} className={cn('disabled:opacity-100', step === 1 && 'underline font-bold')}>
                                    Package <ChevronRight size={16} className='inline-block' />
                                </button>
                                <button onClick={() => { if(canGoToStep2) setStep(2) }} disabled={!canGoToStep2 || step === 2} className={cn('disabled:opacity-50', step === 2 && 'underline font-bold')}>
                                    Participant Info <ChevronRight size={16} className='inline-block' />
                                </button>
							</div>
						</div>
					</div>
                    <Button                       
						variant="ghost"
                        size="icon"
						onClick={handleClose}
						className='absolute top-3 right-3 p-0 w-8 h-8 !text-white flex items-center justify-center hover:bg-white/20'
                        aria-label="Close"
                    >
						{/* <X className='text-white w-6 h-6' /> */}
					</Button>
				</div>

				{/* --- SCROLLABLE CONTENT --- */}                
				<div className='p-6 md:p-8 overflow-y-auto'>
					{step === 1 && (
						<PackageSelectionStep
							tourDetails={tourDetails}
							selectedPackages={selectedPackages}
							setSelectedPackages={setSelectedPackages}
							onContinue={() => { if(canGoToStep2) setStep(2) }}
                            paymentOption={paymentOption}
                            setPaymentOption={setPaymentOption}
						/>
					)}
                    {step === 2 && (
						<ParticipantInfoStep
							selectedPackages={selectedPackages}
                            buyer={buyerInfo}
                            setBuyer={setBuyerInfo}
                            participants={participants}
                            setParticipants={setParticipants}
                            onContinue={() => setStep(3)}
						/>
					)}
                    {step === 3 && (
                        <TermsAndConditionsStep
                            onConfirm={handleBookingConfirm}
                            buyerName={`${buyerInfo.firstName} ${buyerInfo.lastName}`}
                        />
                    )}
                    {/* The summary is now part of the scrollable content */}
                    {step > 1 && (
                        <div className="mt-8">
                            <BookingSummary
                                tourDetails={tourDetails}
                                selectedPackages={selectedPackages}
                                paymentOption={paymentOption}
                                step={step}
                                promoCode={promoCode}
                                setPromoCode={setPromoCode}
                                handleApplyPromoCode={handleApplyPromoCode}
                                discount={discount}
                                promoError={promoError}
                            />
                        </div>
                    )}
				</div>
			</DialogContent>
		</Dialog>
	)
}