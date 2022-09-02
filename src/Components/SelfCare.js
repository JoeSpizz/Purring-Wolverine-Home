function SelfCare (){
    return <div>
    {/* The keyframed animation for the title of this page */}
    <svg viewBox="0 0 2200 200">
<symbol id="e-text">
  <text text-anchor="middle" x="50%" y="80%">Self-Care</text>

</symbol>

<g class = "g-ants">
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
</g>
</svg>
{/* code for the videos themsevles */}
<div className="twoThings">
<iframe width="560" height="315" src="https://www.youtube.com/embed/31HDzYOyZNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/fpvB-YRA0aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div className="twoThings">
    <p className="videoDescription">Wherein we discuss why happiness is not a default state and what you should focus on instead to stabilize your mental.</p>
    <p className="videoDescription">Wherein we remove the things that might be preventing you from getting a peaceful night's rest. And remind you that you are ARE worthy of good things and success. To date this is my most watched video!</p>
</div>
<div className="twoThings">
<iframe width="560" height="315" src="https://www.youtube.com/embed/4PiRF31UKDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div className="twoThings">
    <p className="videoDescription">Wherein we talk about the various communication styles people bring to a relationship. Specifically when there is tension or a trigger. This is based on work done by Stan Tatkin <a href="https://www.goodreads.com/en/book/show/16291797-your-brain-on-love" target="_blank" rel="noreferrer">The Neurobiology of Relationships</a></p>
</div>
</div>
}

export default SelfCare