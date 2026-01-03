import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import dump from '../../assets/images/dump.png'
import { ContainerBtn } from '../../components/Buttons/Default/styles'

type InputGroupProps = {
  maxwidth?: string
}

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const SideBar = styled.aside`
  z-index: 1;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.pink_baby};
  padding: 32px 8px;

  > h3 {
    text-align: center;
  }

  h3 {
    width: 100%;
    font-size: 16px;
    font-weight: 700px;
    line-height: 18.75px;
    display: block;
    color: ${colors.pink_light};
  }

  ${ContainerBtn} {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 280px;
    width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.pink_light};
  padding: 16px 8px;
  position: relative;
  color: ${colors.pink_baby};
  margin-bottom: 24px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 16px;
    object-fit: cover;
  }

  h5 {
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      text-align: left;
    }
  }

  span {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }
`

export const Dump = styled.button`
  background-image: url(${dump});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 16px;
  right: 8px;
  cursor: pointer;
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;

  span {
    color: ${colors.pink_light};
    font-size: 14px;
    font-weight: 700;
  }
`

export const FormContainer = styled.form`
  display: block;
  color: ${colors.pink_light};

  .d-flex {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      width: 100%;
    }
  }

  .form__delivery,
  .form__payment,
  .form__finalize__payment {
    margin: 24px 0;
  }

  .form__finalize__payment {
    p {
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 400px;
      text-align: justify;
    }
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  display: block;
  width: ${(props) => props.maxwidth || 'auto'};
  margin-top: 8px;

  label {
    display: block;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    margin-bottom: 8px;
  }

  input {
    display: block;
    width: 100%;
    height: 32px;
    background-color: ${colors.pink_light};
    padding: 4px 8px;
    border: solid 2px transparent;

    &.error {
      border: 2px solid red;
    }
  }

  > ${ContainerBtn} {
    margin-bottom: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
