export interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export interface DOMElements {
    menuButton: HTMLButtonElement | null;
    menuList: HTMLUListElement | null;
    reviewsContainer: HTMLDivElement | null;
    reviewsPath: HTMLDivElement | null;
    reviewNodes: NodeListOf<HTMLDivElement>;
    canvas: HTMLCanvasElement | null;
    progressBar: HTMLDivElement;
}

export interface Translation {
    [key: string]: string;
}

export interface LanguagePack {
    [key: string]: Translation;
    en: Translation;
    uk: Translation;
}

export interface FormValidationResult {
    text: string;
    color: string;
}

export interface FormValidation {
    [key: string]: (form: HTMLFormElement, name: string, phone: string, msgElement: HTMLElement) => FormValidationResult;
}

export type LanguageCode = 'en' | 'uk';

export interface ModalElements {
    modal: HTMLDivElement;
    trigger: HTMLElement;
    closeButton: HTMLElement;
} 