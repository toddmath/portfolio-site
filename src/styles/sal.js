import { css } from 'styled-components'

export const sal = css`
  [data-sal] {
    transition-duration: 0.2s;
    transition-duration: var(--sal-duration, 0.2s);
    transition-delay: 0s;
    transition-delay: var(--sal-delay, 0s);
    transition-timing-function: ease;
    transition-timing-function: var(--sal-easing, ease);
    &[data-sal-duration='200'] {
      transition-duration: 0.2s;
    }
    &[data-sal-duration='250'] {
      transition-duration: 0.25s;
    }
    &[data-sal-duration='300'] {
      transition-duration: 0.3s;
    }
    &[data-sal-duration='350'] {
      transition-duration: 0.35s;
    }
    &[data-sal-duration='400'] {
      transition-duration: 0.4s;
    }
    &[data-sal-duration='450'] {
      transition-duration: 0.45s;
    }
    &[data-sal-duration='500'] {
      transition-duration: 0.5s;
    }
    &[data-sal-duration='550'] {
      transition-duration: 0.55s;
    }
    &[data-sal-duration='600'] {
      transition-duration: 0.6s;
    }
    &[data-sal-duration='650'] {
      transition-duration: 0.65s;
    }
    &[data-sal-duration='700'] {
      transition-duration: 0.7s;
    }
    &[data-sal-duration='750'] {
      transition-duration: 0.75s;
    }
    &[data-sal-duration='800'] {
      transition-duration: 0.8s;
    }
    &[data-sal-duration='850'] {
      transition-duration: 0.85s;
    }
    &[data-sal-duration='900'] {
      transition-duration: 0.9s;
    }
    &[data-sal-duration='950'] {
      transition-duration: 0.95s;
    }
    &[data-sal-duration='1000'] {
      transition-duration: 1s;
    }
    &[data-sal-duration='1050'] {
      transition-duration: 1.05s;
    }
    &[data-sal-duration='1100'] {
      transition-duration: 1.1s;
    }
    &[data-sal-duration='1150'] {
      transition-duration: 1.15s;
    }
    &[data-sal-duration='1200'] {
      transition-duration: 1.2s;
    }
    &[data-sal-duration='1250'] {
      transition-duration: 1.25s;
    }
    &[data-sal-duration='1300'] {
      transition-duration: 1.3s;
    }
    &[data-sal-duration='1350'] {
      transition-duration: 1.35s;
    }
    &[data-sal-duration='1400'] {
      transition-duration: 1.4s;
    }
    &[data-sal-duration='1450'] {
      transition-duration: 1.45s;
    }
    &[data-sal-duration='1500'] {
      transition-duration: 1.5s;
    }
    &[data-sal-duration='1550'] {
      transition-duration: 1.55s;
    }
    &[data-sal-duration='1600'] {
      transition-duration: 1.6s;
    }
    &[data-sal-duration='1650'] {
      transition-duration: 1.65s;
    }
    &[data-sal-duration='1700'] {
      transition-duration: 1.7s;
    }
    &[data-sal-duration='1750'] {
      transition-duration: 1.75s;
    }
    &[data-sal-duration='1800'] {
      transition-duration: 1.8s;
    }
    &[data-sal-duration='1850'] {
      transition-duration: 1.85s;
    }
    &[data-sal-duration='1900'] {
      transition-duration: 1.9s;
    }
    &[data-sal-duration='1950'] {
      transition-duration: 1.95s;
    }
    &[data-sal-duration='2000'] {
      transition-duration: 2s;
    }
    &[data-sal-delay='50'] {
      transition-delay: 0.05s;
    }
    &[data-sal-delay='100'] {
      transition-delay: 0.1s;
    }
    &[data-sal-delay='150'] {
      transition-delay: 0.15s;
    }
    &[data-sal-delay='200'] {
      transition-delay: 0.2s;
    }
    &[data-sal-delay='250'] {
      transition-delay: 0.25s;
    }
    &[data-sal-delay='300'] {
      transition-delay: 0.3s;
    }
    &[data-sal-delay='350'] {
      transition-delay: 0.35s;
    }
    &[data-sal-delay='400'] {
      transition-delay: 0.4s;
    }
    &[data-sal-delay='450'] {
      transition-delay: 0.45s;
    }
    &[data-sal-delay='500'] {
      transition-delay: 0.5s;
    }
    &[data-sal-delay='550'] {
      transition-delay: 0.55s;
    }
    &[data-sal-delay='600'] {
      transition-delay: 0.6s;
    }
    &[data-sal-delay='650'] {
      transition-delay: 0.65s;
    }
    &[data-sal-delay='700'] {
      transition-delay: 0.7s;
    }
    &[data-sal-delay='750'] {
      transition-delay: 0.75s;
    }
    &[data-sal-delay='800'] {
      transition-delay: 0.8s;
    }
    &[data-sal-delay='850'] {
      transition-delay: 0.85s;
    }
    &[data-sal-delay='900'] {
      transition-delay: 0.9s;
    }
    &[data-sal-delay='950'] {
      transition-delay: 0.95s;
    }
    &[data-sal-delay='1000'] {
      transition-delay: 1s;
    }
    &[data-sal-easing='linear'] {
      transition-timing-function: linear;
    }
    &[data-sal-easing='ease'] {
      transition-timing-function: ease;
    }
    &[data-sal-easing='ease-in'] {
      transition-timing-function: ease-in;
    }
    &[data-sal-easing='ease-out'] {
      transition-timing-function: ease-out;
    }
    &[data-sal-easing='ease-in-out'] {
      transition-timing-function: ease-in-out;
    }
    &[data-sal-easing='ease-in-cubic'] {
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &[data-sal-easing='ease-out-cubic'] {
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    &[data-sal-easing='ease-in-out-cubic'] {
      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &[data-sal-easing='ease-in-circ'] {
      transition-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    &[data-sal-easing='ease-out-circ'] {
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &[data-sal-easing='ease-in-out-circ'] {
      transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    &[data-sal-easing='ease-in-expo'] {
      transition-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    }
    &[data-sal-easing='ease-out-expo'] {
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    }
    &[data-sal-easing='ease-in-out-expo'] {
      transition-timing-function: cubic-bezier(1, 0, 0, 1);
    }
    &[data-sal-easing='ease-in-quad'] {
      transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
    &[data-sal-easing='ease-out-quad'] {
      transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    &[data-sal-easing='ease-in-out-quad'] {
      transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    &[data-sal-easing='ease-in-quart'] {
      transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }
    &[data-sal-easing='ease-out-quart'] {
      transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &[data-sal-easing='ease-in-out-quart'] {
      transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    }
    &[data-sal-easing='ease-in-quint'] {
      transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    &[data-sal-easing='ease-out-quint'] {
      transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    &[data-sal-easing='ease-in-out-quint'] {
      transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    }
    &[data-sal-easing='ease-in-sine'] {
      transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }
    &[data-sal-easing='ease-out-sine'] {
      transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    &[data-sal-easing='ease-in-out-sine'] {
      transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    &[data-sal-easing='ease-in-back'] {
      transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
    &[data-sal-easing='ease-out-back'] {
      transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &[data-sal-easing='ease-in-out-back'] {
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  [data-sal|='fade'] {
    opacity: 0;
    transition-property: opacity;
    &.sal-animate,
    body.sal-disabled & {
      opacity: 1;
    }
  }
  [data-sal|='slide'] {
    opacity: 0;
    transition-property: opacity, transform;
    &.sal-animate,
    body.sal-disabled & {
      opacity: 1;
      transform: none;
    }
  }
  [data-sal='slide-up'] {
    transform: translateY(20%);
  }
  [data-sal='slide-down'] {
    transform: translateY(-20%);
  }
  [data-sal='slide-left'] {
    transform: translateX(20%);
  }
  [data-sal='slide-right'] {
    transform: translateX(-20%);
  }
  [data-sal|='zoom'] {
    opacity: 0;
    transition-property: opacity, transform;
    &.sal-animate,
    body.sal-disabled & {
      opacity: 1;
      transform: none;
    }
  }
  [data-sal='zoom-in'] {
    transform: scale(0.5);
  }
  [data-sal='zoom-out'] {
    transform: scale(1.1);
  }
  [data-sal|='flip'] {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition-property: transform;
    &.sal-animate,
    body.sal-disabled & {
      transform: none;
    }
  }
  [data-sal='flip-left'] {
    transform: perspective(2000px) rotateY(-91deg);
  }
  [data-sal='flip-right'] {
    transform: perspective(2000px) rotateY(91deg);
  }
  [data-sal='flip-up'] {
    transform: perspective(2000px) rotateX(-91deg);
  }
  [data-sal='flip-down'] {
    transform: perspective(2000px) rotateX(91deg);
  }
`

export default sal
