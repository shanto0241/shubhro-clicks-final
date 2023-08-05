const StoryCard = () => {
  return (
    <div>
      <div className="card w-96 shadow-xl m-2 hover:border">
        <div className="card-body">
          <h2 className="card-title text-2xl">This is demo story card!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure className=''>
          <img
            src="https://picsum.photos/200/200/?image=1024"
            alt="Album"
            className='w-full p-2 rounded-xl shadow-md'
          />
        </figure>
      </div>
    </div>
  );
};

export default StoryCard;
