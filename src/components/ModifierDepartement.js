import React from 'react'

const ModifierDepartement = () => {
  return (
    <>
        <h2>Modifier ou supprimer la departement</h2>

        <form>
            <div class="mb-3">
                <label for="exampleInputNom" class="form-label">nom departement</label>
                <input type="text" class="form-control" id="exampleInputNom" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputDesc" class="form-label">description departement</label>
                <input type="text" class="form-control" id="exampleInputDesc"/>
            </div>
            <button type="submit" class="btn btn-primary mx-5">modifier</button>
            <button type="submit" class="btn btn-primary mx-5">supprimer</button>
        </form>
    </>
  )
}

export default ModifierDepartement