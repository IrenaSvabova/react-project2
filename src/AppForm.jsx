export default function AppForm() {
return(
<>
<form>
  <h1>CRUD Application</h1>
  <div> 
    <label>Name:</label>
    <input type="text"/>
  </div>
  <div> 
    <label>Username:</label>
    <input type="text"/>
  </div>
  <div>
    <label>Email:</label>
    <input type="email" />
  </div>
  <div>
    <label>City:</label>
    <input type="text" />
  </div>
  <div>
    <label>Zipcode:</label>
    <input type="number"/>
  </div>
  <div>
    <label>Phone</label>
    <input type="number"/>
  </div>
</form>
</>
)
}