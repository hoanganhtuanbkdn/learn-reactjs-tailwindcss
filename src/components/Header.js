
import Logo from '../assets/images/logo.png'
function Header(props){
    const {title, bgColor} = props;
    return (
        <header className={"h-[112px] w-[1440px] max-w-full flex flex-row items-center justify-between"}>
        <a
          href="/"
        >
         <img src={Logo} alt="" className='h-[50px] w-[141px]' />
        </a>
        <div className='space-x-[80px]'>
          <a href="/product">
            Product
          </a>
          <a href="/contact">
            Contact
          </a>
          <a href='about-us'>
            About Us
          </a>
        </div>
        <button className='bg-[#FA8443] rounded-lg h-[46px] w-[120px] text-white'>
          Sign Up
        </button>
      </header>
    )
}

export default Header