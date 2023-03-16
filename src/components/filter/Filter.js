import { FilterStyle } from "./Filter.styled"

export const Filter = ({filter, onFilter}) => {
    return (<FilterStyle>
        <h2>filter</h2>
        <form>
            <label for="filter">
                find contacts by name
            </label>
            <input
            type="text"
            name="filter"
            value={filter}
            onChange={onFilter}
                
            ></input>
                </form>  
        </FilterStyle>
       
    )
}