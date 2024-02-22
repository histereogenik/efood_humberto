import { PulseLoader } from 'react-spinners'

import { colors } from '../../styles'

import { LoaderContainer } from './styles'

const Loader = () => (
  <LoaderContainer>
    <PulseLoader color={colors.salmon} />
  </LoaderContainer>
)

export default Loader
