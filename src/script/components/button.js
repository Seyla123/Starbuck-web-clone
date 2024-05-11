
const createButton = (title,btnColor,textColor,hoverColor,btnLink) => {
    return  `
    <a href="${btnLink}">
        <button class="h-3 p-4   flex justify-center items-center  ${btnColor} rounded-full outline outline-1 ${textColor} hover:${hoverColor}">
            ${title}
        </button>
    </a>
    `;
}
export class button extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute("title") || 'Sign in';
        const btnColor = this.getAttribute("btnColor") || '';
        const textColor = this.getAttribute("textColor") || '';
        const hoverColor = this.getAttribute("hoverColor") || 'bg-gray-200';
        const btnLink = this.getAttribute("btnLink") || '#';
        this.innerHTML = createButton(title,btnColor,textColor,hoverColor,btnLink);
    }
}

customElements.define('button-component', button);