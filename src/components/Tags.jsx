const Tag = ({ tagColor, tagText }) => {
    return (
        <>
            <div style={{backgroundColor:tagColor, borderColor:tagColor}} className="tagsDiv">{tagText}</div>
        </>
    );
};
export default Tag;
