import styled from "styled-components";

const CoverContainer = styled.img`
    margin: 2em 0;
    width: 80%;
    height: 500px;
    border-radius: 10px;

    @media (min-width: 1024px) {
        width: 50%;
    }

    @media (min-width: 1536px) {
        width: 40%;
    }
`

interface Props {
    coverSrc: string
    altCover?: string
}

const Cover = ({coverSrc, altCover} : Props) => {
    return ( 
        <CoverContainer src={coverSrc} alt={altCover} />
     );
}
 
export default Cover;