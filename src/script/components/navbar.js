const createNavbar = (maxWith, noMenu) => {
    return `<div class=" w-full flex justify-between gap-4 bg-white px-8 h-[83px] lg:h-[99px] shadow-lg p-4 ${noMenu ? "md:justify-start" : "md:justify-center"} outline outline-1 outline-none relative z-50">
    <a href="../home/home.html" class="max-w-14">
        <img src="../../images/layout/starkbuck-logo.png" alt="">
    </a>
    <div class="w-full ${maxWith ?  "max-w-screen-2xl" : ""} justify-between items-center hidden ${noMenu ? "md:hidden" : "md:flex"} ">
        <div>
            <ul class="flex gap-4 sodan font-bold tracking-widest text-sm">
                <li><a class="hover:text-green-700"  href="../../pages/menu/menu.html">MENU</a></li>
                <li><a class="hover:text-green-700"  href="../../pages/reward/reward.html">REWARDS</a></li>
                <li><a class="hover:text-green-700"  href="../../pages/gift-card/gift-card.html">GIFT CARDS</a></li>
            </ul>

        </div>

        <div>
            <ul class="flex gap-12 manrope-sans font-semibold text-sm items-center">
                <li >
                    <a class="flex items-center gap-2 hover:text-green-700  " href="../../pages/find-a-store/find-a-store.html">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Find a Store</p>
                        </a>
                </li>
                <li class="flex gap-4 items-center">
                    <a href="../../pages/log-in/log-in.html" class="h-3 p-4 items-center flex justify-center rounded-full outline outline-1 hover:bg-gray-200 ">Sign in</a>
                    <a href="../../pages/join-now/join-now.html" class="h-3 p-4 items-center flex justify-center text-white  bg-black hover:bg-gray-600 rounded-full">Join now</a>
                </li>
            </ul>
        </div>

    </div>
    <button class="menu-button max-w-5 flex items-center ${noMenu ? "hidden" : ""} md:hidden " id="menuButton">
        <!-- Hamburger icon or menu icon -->
        <span class="menu-icon" id="menuIcon">
          <img src="../../images/layout/menu.png" alt="Menu">
        </span>
      </button>
    <a class="invisible  max-w-14 hidden  2xl:${maxWith ? "flex" : "invisible"} ${noMenu ? "2xl:hidden" : ""}">
        <img src="../../images/layout/starkbuck-logo.png" alt="">
    </a>
    
</div> 
<!-- sidebar -->
<div id="minMenuDropdown" class="bg-white duration-300 w-[80%] md:invisible h-screen fixed right-[-100%] z-40">
    <div class="flex mt-10 flex-col">
        <ul class="flex flex-col text-xl ">
            <li><a class="px-8 py-4 block" href="../../pages/menu/menu.html">Menu</a></li>
            <li><a class="px-8 py-4 block " href="../../pages/reward/reward.html">Rewards</a></li>
            <li><a class="px-8 py-4 block " href="../../pages/gift-card/gift-card.html">Gift Cards</a></li>
        </ul>
        <hr class="mx-8 my-4">
        <div class="mx-8 my-4">
            <div class="flex gap-4 items-center text-md font-bold">
                <a href="../../pages/log-in/log-in.html" class="h-3 p-4 items-center flex justify-center rounded-full outline outline-1 hover:bg-gray-200 ">Sign in</a>
                <a href="../../pages/join-now/join-now.html" class="h-3 p-4 items-center flex justify-center text-white  bg-black hover:bg-gray-600 rounded-full">Join now</a>
        </div>
            <div class="flex manrope-sans font-semibold text-md items-center mt-4">
                <a class="flex items-center gap-2 hover:text-green-700  " href="../../pages/find-a-store/find-a-store.html">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Find a Store</p>
                    </a>
            </div>
        </div>
    </div>
</div>
    `;
}
class navbar extends HTMLElement {
    connectedCallback() {
        const maxWith = this.getAttribute("maxWith")
        const noMenu = this.getAttribute("noMenu")
        this.innerHTML = createNavbar(maxWith, noMenu);
    }
}

customElements.define('navbar-component', navbar);