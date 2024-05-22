
export const createCarousel = (title, imgUrlArray, glide) => {
   
	return `
    <div class="relative mt-10">
        <!-- title -->
        <div class="md:ml-[78px] pl-6  flex items-center justify-between ">
            <h2 class="uppercase font-bold text-sm md:text-md">${title}</h2>
            <button class="pr-8">
                <a href="../../pages/gift-card-category/gift-card-category.html?${i}" class="text-green-700 text-sm md:text-md font-semibold">See all</a>
            </button>
        </div>
    
        <!-- Carousel -->
        <div class="relative w-full ${glide} overflow-hidden">
            <!-- Slides -->
            <div class="" data-glide-el="track">
                <ul class="relative w-full overflow-hidden whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] py-6">
                    ${imgUrlArray
											.map((item) => {
												return `
                            <div class="rounded-lg md:rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:-translate-y-4 duration-500">
                                <a href="../../pages/gift-card-detail/gift-card-detail.html?${item}" class="w-full">
                                    <img src="${item}" class="object-cover w-full h-full">
                                </a>
                            </div>
                        `;
											})
											.join('')}
                </ul>
            </div>

            <!-- Controls -->
            <div class="absolute z-[10] left-[0%] flex items-center justify-between w-full h-0 px-4 top-1/2" data-glide-el="controls">
                <button class="inline-flex items-center justify-center w-8 h-8 transition duration-300 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none" data-glide-dir="<" aria-label="prev slide">
                    <img src="../../images/gift-card/icons/left-chevron.png" alt="" class="w-6">
                </button>
                <button class="inline-flex items-center justify-center w-8 h-8 transition duration-300 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none" data-glide-dir=">" aria-label="next slide">
                    <img src="../../images/gift-card/icons/right-chevron.png" alt="" class="w-6">
                </button>
            </div>
        </div>
    </div>
`;

};
let i = 0
export class CarouselComponent extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		const glide = this.getAttribute('glide');
		// Parse the imgUrl attribute as an array
		const imgUrlArray = JSON.parse(this.getAttribute('imgUrl'));
		this.innerHTML = createCarousel(title, imgUrlArray, glide);
        i++
	}
}

customElements.define('carousel-component', CarouselComponent);

const giftArr = ["../../images/gift-card/feature-1.jpg", "../../images/gift-card/feature-2.jpg", "../../images/gift-card/feature-3.jpg", "../../images/gift-card/feature-4.jpg",
"../../images/gift-card/feature-5.png", "../../images/gift-card/feature-6.jpg", "../../images/gift-card/feature-7.jpg", "../../images/gift-card/feature-8.png",
"../../images/gift-card/feature-9.jpg", "../../images/gift-card/feature-10.png", "../../images/gift-card/feature-11.png", "../../images/gift-card/feature-12.jpg",
"../../images/gift-card/feature-13.png", "../../images/gift-card/feature-14.png", "../../images/gift-card/feature-15.png", "../../images/gift-card/feature-16.jpg",
"../../images/gift-card/feature-17.png", "../../images/gift-card/feature-18.png", "../../images/gift-card/feature-19.png", "../../images/gift-card/feature-20.jpg"];
const giftArr2 = ["../../images/gift-card/feature-1.jpg", "../../images/gift-card/feature-2.jpg", "../../images/gift-card/feature-3.jpg", "../../images/gift-card/feature-4.jpg",
"../../images/gift-card/feature-5.png", "../../images/gift-card/feature-6.jpg", "../../images/gift-card/feature-7.jpg", "../../images/gift-card/feature-8.png",
"../../images/gift-card/feature-9.jpg", "../../images/gift-card/feature-10.png", "../../images/gift-card/feature-11.png", "../../images/gift-card/feature-12.jpg",
"../../images/gift-card/feature-13.png", "../../images/gift-card/feature-14.png", "../../images/gift-card/feature-15.png", "../../images/gift-card/feature-16.jpg",
"../../images/gift-card/feature-17.png", "../../images/gift-card/feature-18.png", "../../images/gift-card/feature-19.png", "../../images/gift-card/feature-20.jpg"];


