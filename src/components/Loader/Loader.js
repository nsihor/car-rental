import { ColorRing } from 'react-loader-spinner';

const Loader = () => (
    <ColorRing
        visible={true}
        height="130"
        width="130"
        ariaLabel="blocks-loading"
        wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}
        wrapperClass="blocks-wrapper"
        colors={['#3470FF', '#849b87', '#0B44CD', '#cfe2ff', '#abbd81']}
    />)

export default Loader;