import logo from './team/logo.png'

const SectionThird = () => {
    return (
        <div className='w-10/12 mt-7 mx-auto'>
            <div className='history '>
                <img src={logo} alt="" />
                <div className='flex-col '>
                    <h2 className='text-3xl mb-3'>კლუბის ისტორია</h2>
                    <p>დუშეთში საფეხბურთო კლუბი  60- 70 იანი წლებში ჩამოყალიბდა.
                       80- 90 იანი წლებში გუნდმა მიაღწია გარკვეულ წარმატებას .
                       2018 წელს (მწვრთნელი ემზარ ხოსრიაშვილი , კლუბის გენერალური დირექტორი სოსო ჭიკაიძე, სპორტული დირექტორი ვლადიმერ  ბურდული და დამხმარე მწვრთნელი გიორგი მაჭარაძე ) რეგიონულ თამაშებში გამარჯვებით მე- 2  ლიგაში გადავიდა.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionThird