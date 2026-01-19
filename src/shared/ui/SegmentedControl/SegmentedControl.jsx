import clsx from "clsx";
import {useEffect, useRef, useState} from "react";

import styles from './SegmentedControl.module.scss'

export const SegmentedControl = (props) => {
  const {
    options,
    value,
    onChange,
    name,
    size = 'md'
  } = props

  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0)"
  });
  const containerRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const activeIndex = options.findIndex(item => item.value === value);
    const activeButton = buttonsRef.current[activeIndex];
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      const width = buttonRect.width;
      const offsetLeft = buttonRect.left - containerRect.left;

      setIndicatorStyle({
        width: `${width}px`,
        transform: `translateX(${offsetLeft}px)`
      })
    }
  }, [value, options]);

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % options.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + options.length) % options.length;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      const nextOption = options[nextIndex];
      onChange(nextOption.value);
      buttonsRef.current[nextIndex]?.focus();
    }
  }

  return (
    <div
      className={clsx(styles.root, styles[`size-${size}`])}

      ref={containerRef}
      role='radiogroup'
      aria-label={name}
    >
      <div
        className={styles.activeIndicator}
        style={{
          width: indicatorStyle.width,
          transform: indicatorStyle.transform,
        }}
      />

      {options.map((option, index) => {
        const isActive = option.value === value

        return (
          <button
            key={option.value}
            ref={(el) => {
              buttonsRef.current[index] = el
            }}
            type="button"
            className={clsx(styles.button)}

            onClick={() => onChange(option.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}

            role="radio"
            aria-checked={isActive}
            tabIndex={isActive ? 0 : -1}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}