import { FC } from 'react';

export interface LovesEntry {
    name: string;
};

export interface LovesProps {
    loves: LovesEntry[];
}

const Loves: FC<LovesProps> = (loves) => {
    return (
        <>
            <h2 className="cd-headline clip is-full-width">
                { "I love " }
                {/* <!-- Attach Loves --> */}
                <span id="whatilove" className="cd-words-wrapper">
                    {loves.loves.map((love, index) => (
                        <b key={index} className={index == 0 ? "is-visible" : ""} >{love.name}</b>
                    ))}
                </span>
            </h2>
        </>
    );
};

export default Loves;