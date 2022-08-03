import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DeleteIcon from '@mui/icons-material/Delete';

import "./Search.scss";




const Search = () => {
  return (
    <>
      <div id='search'>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',

          }}
        >
          <PersonSearchIcon className='item-icon' />
          <TextField fullWidth label="Tìm kiếm ..." className='search-icon' />
        </Box>
      </div>
    </>

  )
}
export default Search;