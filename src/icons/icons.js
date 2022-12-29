import { AiOutlineSearch,AiOutlineUser,AiOutlinePlus,AiOutlineCheck } from 'react-icons/ai';
import { IoIosNotificationsOutline,IoMdArrowDropdown } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';
import { CgUserlane} from 'react-icons/cg';
import { BiUserPin,BiSupport } from 'react-icons/bi';
import { IoEyeSharp } from 'react-icons/io5';
import { HiOutlineArrowLeftCircle } from 'react-icons/hi2';
import { BsFillPlayFill } from 'react-icons/bs';
import { RiAddFill } from 'react-icons/ri';

const SearchIcon = ({styles}) => {
    return(<AiOutlineSearch className={`${styles}`}/>)
}

const UserIcon = ({styles}) => {
    return(<AiOutlineUser className={`${styles}`}/>)
}

const ArrowIcon = ({styles}) => {
    return(<IoMdArrowDropdown className={`${styles}`}/>)
}

const NoticeIcon = ({styles}) => {
    return(<IoIosNotificationsOutline className={`${styles}`}/>)
}

const ChangeProfileIcon = ({styles}) => {
    return(<FaPencilAlt className={`${styles}`}/>)
}

const TransferProfileIcon = ({styles}) => {
    return(<BiUserPin className={`${styles}`}/>)
}

const AccountIcon = ({styles}) => {
    return(<CgUserlane className={`${styles}`}/>)
}

const SupportIcon = ({styles}) => {
    return(<BiSupport className={`${styles}`}/>)
}

const AddNewIcon = ({styles}) => {
    return(<AiOutlinePlus className={`${styles}`}/>)
}

const CheckBoxIcon = ({styles}) => {
    return(<AiOutlineCheck className={`${styles}`}/>)
}

const ShowPasswordIcon = ({styles}) => {
    return(<IoEyeSharp className={`${styles}`}/>)
}

const SliderButtonIcon = ({styles}) => {
    return(<HiOutlineArrowLeftCircle className={`${styles}`}/>)
}

const WatchIcon = ({styles}) => {
    return(<BsFillPlayFill className={`${styles}`}/>)
}

const AboutIcon = ({styles}) => {
    return(<RiAddFill className={`${styles}`}/>)
}
export {SearchIcon,UserIcon,ArrowIcon,
        NoticeIcon,ChangeProfileIcon,
        TransferProfileIcon,AccountIcon,
        SupportIcon,AddNewIcon,CheckBoxIcon,
        ShowPasswordIcon,SliderButtonIcon,
        WatchIcon,AboutIcon}