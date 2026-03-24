function Header(){
  return (
    <div className="flex justify-between p-5 bg-violet-400">
      <h1 className="font-extrabold text-2xl">BLOGS</h1>
      <ul className="flex gap-9 font-semibold">
        <li className="hover:text-violet-600 text-violet-900"><a href="#Home">Home</a></li>
        <li className="hover:text-violet-600 text-violet-900"><a href="#About Author">About Author</a></li>
        <li className="hover:text-violet-600 text-violet-900"><a href="#About this Project">About this Project</a></li>
      </ul>
      <ul className="flex gap-9 font-semibold">
        <li className="hover:text-violet-600 text-violet-900"><a href="https://github.com">GitHub</a></li>
        <li className="hover:text-violet-600 text-violet-900"><a href="https://linkedin.com">LinkedIn</a></li>
        <li className="hover:text-violet-600 text-violet-900"><a href="https://leetcode.com">LeetCode</a></li>
      </ul>
    </div>
  )
}
export default Header