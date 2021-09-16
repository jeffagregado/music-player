import styled from "styled-components";
import NextBtn from "../buttons/NextBtn";
import PlayBtn from "../buttons/PlayBtn";
import PrevBtn from "../buttons/PrevBtn";

const ControlContainer = styled.div`
    display: flex;
    margin: 1em 0;
    width: 80%;
    justify-content: space-between ;

    @media (min-width: 768px) {
        width: 40%;
    }
`

interface Props {
    isPlaying?: boolean
}

const Controls = ({isPlaying}: Props) => {
    return ( 
        <ControlContainer>
            <PrevBtn />
            <PlayBtn toggle={isPlaying} />
            <NextBtn />
        </ControlContainer>
     );
}
 
export default Controls;