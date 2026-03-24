function Profile(props){
  const {profileObj}=props
  return (
    <div className="bg-violet-300 rounded-3xl">
      <div className="relative">
        <img src={profileObj.image} alt="image"/>
        <img src={profileObj.authorImage} alt="authorImage" className="rounded-full w-20 absolute left-10 top-52"/>
        <div className="p-10">
          <p className="text-2xl font-bold">{profileObj.title}</p>
          <p className="font-semibold">{profileObj.description}</p>
          <div className="mt-5 font-extrabold w-full">
            <p>{profileObj.author}</p>
            <p>{profileObj.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile