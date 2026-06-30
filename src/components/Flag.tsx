type FlagShape = 'rectangle' | 'square' | 'circle';

type FlagTeam = {
    crest?: string | null;
};

type FlagProps = Readonly<{
    team: FlagTeam;
    shape?: FlagShape;
}>;

export default function Flag({ team, shape = 'rectangle' }: FlagProps) {
    const flagStyle = team.crest
        ? { backgroundImage: `url(${team.crest})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : { backgroundColor: 'lightgray', border: '1px solid #ccc' };

    const shapeClasses = {
        rectangle: 'aspect-[3/2] h-6',
        square: 'aspect-square h-8',
        circle: 'aspect-square h-8 rounded-full',
    }[shape];

    return <span className={`inline-block align-middle overflow-hidden h-6 ${shapeClasses}`} style={flagStyle}></span>;
}