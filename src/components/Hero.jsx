import '../App.css';
function Hero() {


  return (
   <div className="container">
      <div className="hero">
        <input className='input_search' type="text"  placeholder='Searching....' />
        <select className='select_sort' name="select" id="select">
            <option value="Amerika">Amerika</option>
            <option value="Osiyo">Osiyo</option>
            <option value="Amerika">Amerika</option>
            <option value="Amerika">Amerika</option>
            <option value="Amerika">Amerika</option>

        </select>
      </div>
   </div>
  );
}

export default Hero;