import React , {useState} from "react"
import Modal from "react-modal"
import Rate from "../Rate"

Modal.setAppElement('#root')
 
const AddMovie = ({addNewMovie}) =>{
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  
 
    const openModal = () => {
        setIsOpen(true);
    };
 
  function closeModal(){
    setIsOpen(false);
    };
    const handleSubmit = (e) => {
      let newMovie = {
        id:Math.random(),
        name,
        date,
        rating,
        image,
        type,
        description,
      };
      addNewMovie(e, newMovie);
      setIsOpen(false);
      setName('');
      setDate('');
      setRating('');
      setImage('');
      setType('');
      setDescription('');
    };
  
    return (
      <div>
        <button id="addButt" onClick={openModal}>
          +
          </button>
        <Modal
         // className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
         <div className="divadd">
           <h1>Add Movie</h1>
            <form >
            <label>Movie Name</label>
            <input  className="label"
             type="text"
             name="name"
             value={name}
             required
            onChange={(e)=>setName(e.target.value)}
              />
              <br/>
              <label>Movie Rate</label>
              <div>
                < Rate  input className="label" rating={rating} setRatingSearch={setRating} />
                </div>
              <br/>
            <label>Movie Date</label>
            <input className="label"
             type="number"
             name="date"
             value={date}
             required
            onChange={(e)=>setDate(e.target.value)}
              />
              <br/>
            <label>Movie Image</label>
            <input className="label"
             type="url"
             name="image"
             value={image}
             required
            onChange={(e)=>setImage(e.target.value)}
              />
              <br/>
            <label>Movie Type</label>
            <input className="label"
             type="text"
             name="type"
             value={type}
             required
            onChange={(e)=>setType(e.target.value)}
              />
              <br/>
            <label>Movie summary</label>
            <input className="label"
             type="text"
             name="description"
             value={description}
             required
            onChange={(e)=>setDescription(e.target.value)}
              />
              <br/>
          </form>
          <button className="Add" onClick={handleSubmit}>Add</button>
            <button className="Close" onClick={closeModal} >Close</button>
            </div>
        </Modal>
      </div>
    );
}
 
export default AddMovie