import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <div className="blogList">
      {blogsList.map(eachItem => (
        <BlogItem eachItem={eachItem} key={eachItem.id} />
      ))}
    </div>
  )
}

export default BlogList
