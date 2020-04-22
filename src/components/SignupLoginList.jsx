import React ,  { useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function SignupLoginList() { 
    const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

    return (
        <div>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
       
        <DropdownItem>SignUp</DropdownItem>
        
        <DropdownItem>Login</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>  
        </div>
    )
}

export default SignupLoginList
