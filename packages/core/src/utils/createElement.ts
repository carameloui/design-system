export const createElement = (
  element: string,
  classname: string,
  props: any
): HTMLElement => {
    const elem = document.createElement(element)

    Object.assign(elem, props)

    elem.className = classname

    return elem
};
