function Header(){

  return  <div>
    {/* Creation of title for page */}
  <svg viewBox="0 0 2200 200">
  <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">A PURRING WOLVERINE</text>
  <text text-anchor="middle" x="50.5%" y="80%">A PURRING WOLVERINE</text>
  
  </symbol>

  <g class = "g-ants">
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
  </g>
</svg>
{/* Logo image */}
<a href= "https://www.youtube.com/channel/UCa-v-Az44bcKKbx2o1ioOgQ" target="_blank" rel="noreferrer"><img id="pwImage" src="Wolverinebetteroutlines.png" alt="Purring Wolverine Logo"/></a>
</div>
}
export default Header