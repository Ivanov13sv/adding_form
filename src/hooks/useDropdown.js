import { useState } from "react"

export const useDropdown = (initialSelect, options) =>{
    const [selected, setSelected] = useState(initialSelect);
    const [isOpen, setOpen] = useState(false);

    const selectHandler = (e) => {
		setSelected(e.target.innerText);
        setOpen(!isOpen);
        if (e.charCode === 13 || e.charCode === 32) setOpen(!isOpen);
	};

	const keyHandler = (e) => {
		if (e.charCode === 13 || e.charCode === 32) {
			setOpen(!isOpen);
		}
	};

    return {selected, selectHandler, options, isOpen, keyHandler, setOpen};
}