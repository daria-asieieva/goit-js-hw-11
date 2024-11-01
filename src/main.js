import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery, showNotification, toggleLoader } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.search-form');
    const gallery = new SimpleLightbox('.gallery a');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = event.currentTarget.elements.searchQuery.value.trim();
        
        if (query === '') {
            showNotification('Please enter a search query');
            return;
        }

        clearGallery();
        toggleLoader(true);
        
        try {
            const images = await fetchImages(query);
            renderImages(images);
            gallery.refresh();
        } catch (error) {
            showNotification('Sorry, there are no images matching your search query. Please try again!');
        } finally {
            toggleLoader(false);
        }
    });
});