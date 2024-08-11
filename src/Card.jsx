const DMY = new Date();
const date = DMY.getDate();
const month = DMY.getMonth() + 1;
const year = DMY.getFullYear();
const headingStyle = {
  backgroundColor: "purple",
  color: "white",
  fontSize: "3rem",
  textAlign: "center"
}

function Card()
{
  return <div className='card'>
  <h3 className='family' >Call Family</h3>
  <p className='cardDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero aspernatur fugiat autem explicabo voluptate, tenetur suscipit, maxime porro nobis sit obcaecati? Cupiditate excepturi sint dolores aliquid corrupti quaerat voluptates!</p>
  <p className='cardDate'>{date + "/" + month + "/" + year}</p>
</div>
}

export default Card;