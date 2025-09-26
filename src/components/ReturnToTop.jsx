import { useEffect, useState } from "react";
import * as Icon from "react-feather"
import { clsx } from "clsx";

const ReturnToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleOnTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div onClick={handleOnTop} className={clsx(
      "fixed ${visible ? 'block' : 'hidden'} z-20 bottom-10 p-4 rounded-[50%] right-10 bg-red-400 text-neutral-50 cursor-pointer duration-100 hover:bg-red-300`",
      {
        "block": visible,
        "hidden": !visible
      }
    )}>
      <Icon.ArrowUp />
    </div>
  )
}

export default ReturnToTop