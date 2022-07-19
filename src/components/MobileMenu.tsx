import { Icons } from './Header'
import { BiMenu } from 'react-icons/bi'

import { useState } from 'react'
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react'
interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Menu placement="right-end" offset={25}>
        <MenuHandler>
          <IconButton
            variant="outlined"
            className="border-[#000000]"
            onClick={() => setOpen(!open)}
          >
            <BiMenu className="text-2xl text-[#000000]" />
          </IconButton>
        </MenuHandler>
        <MenuList className="bg-[#fdf97f]">
          {Icons.map((Icon, index) => (
            <MenuItem key={index} className="flex flex-col items-center p-3">
              <Icon.icon className="text-3xl text-black" />
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}
