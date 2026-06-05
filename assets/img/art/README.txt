DROP YOUR ARTWORK HERE  (paintings, photos, sketches — .jpg / .png / .webp)

To put an image into the Artist gallery:
1) Copy your file into this folder, e.g.  sunset.jpg
2) Open ../../index.html, find the Artist section (id="artist").
3) Inside one of the <button class="art ..."> tiles, add an <img>:

     <button class="art art--a" data-reveal data-cursor="open">
       <img src="assets/img/art/sunset.jpg" alt="Sunset, oil on canvas" />
       <span class="art__cap">Sunset, oil on canvas</span>
     </button>

The gradient placeholder hides itself automatically once a real image is present,
and clicking the tile opens it full-screen in the lightbox. That's it.
