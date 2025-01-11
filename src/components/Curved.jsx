import ReactCurvedText from 'react-curved-text';

const CurvedText = () => {
return (
    <ReactCurvedText
        width={300}
        height={300}
        cx={50}
        cy={150}
        rx={100}
        ry={100}
        startOffset={50}
        reversed={false}
        text="react-curved-text"
        textProps={{ style: { "fontSize": "24", "fontWeight":"700" } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
    />
    );
};

export default CurvedText;