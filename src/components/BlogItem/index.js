import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  return (
    <div className="BlogItem">
      <div className="upperCon">
        <h1>{eachItem.title}</h1>
        <p>{eachItem.publishedDate}</p>
      </div>
      <p>{eachItem.description}</p>
    </div>
  )
}

export default BlogItem
