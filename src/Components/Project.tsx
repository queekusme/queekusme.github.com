import React, { ReactNode } from "react";
import {
    Button, Card, CardBody, CardImg,
    CardSubtitle, CardText, CardTitle,
    UncontrolledCollapse
} from 'reactstrap';

interface ProjectProps
{
    uid: string;
    title: ReactNode,
    imageSrc: string,
    slugline: ReactNode;
    descriptionShort: ReactNode;
    descriptionExpanded?: ReactNode;
}

export default function Project({ uid, title, slugline, descriptionShort, descriptionExpanded, imageSrc }: ProjectProps)
{
    return (
        <Card>
            <CardImg top style={{ margin: "0 auto", width: "15vw" }} src={imageSrc} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{ title }</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{ slugline }</CardSubtitle>
                <CardText>
                    { descriptionShort }

                    {descriptionExpanded && (
                        <div>
                            <Button id={uid} style={{ marginBottom: '1rem' }}>
                                Read More...
                            </Button>
                            <UncontrolledCollapse toggler={`#${uid}`}>
                                { descriptionExpanded }
                            </UncontrolledCollapse>
                        </div>
                    )}

                </CardText>
            </CardBody>
        </Card>
    );
}