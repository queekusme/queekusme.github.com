import React from "react";
import {
    CardGroup
} from 'reactstrap';
import Project from "../Components/Project";

export default function FeaturedProjects()
{
    return (
        <div>
            <h1>Featured Projects:</h1>
            <CardGroup>
                <Project
                    uid="penguins"
                    title="Swemark and Denden's Great Eggventure!"
                    imageSrc="/assets/greateggventure.png"
                    slugline="A small RPG featuring penguins made for the 2017 Rainbow Game Jam."
                    descriptionShort={(
                        <p>Swemark and Denden are a lesbian penguin couple who have just arrived at Cherringsworth Zoo
                            and are eager to meet the other penguins. They are also excited as they have been given an
                            egg to raise by the keepers.</p>
                    )}
                    descriptionExpanded={(
                        <div>
                            <p>Follow their story as they both work to fit in with the other penguins and work to look
                                    after their precious little egg.</p>

                            <p>Help Swemark and Denden find their place in the enclosure by completing many quests as you
                                progress through the game. You can complete quests as either penguin.</p>

                            <p>The game has a main story arc that follows the journey of all of the penguins in the
                                enclosure as well as several side-quests which can either be quests you complete on your
                                own or ones where you have to interact with other penguins in some way, shape or form.</p>

                            <p>Code and Game functionality in Unity, Environment and 2D art developed by myself. Majority
                                of other art assets created by another team member.</p>
                            <p>
                                Play the game today at <a href="https://anniekennedy.itch.io/great-eggventure">https://anniekennedy.itch.io/great-eggventure</a>
                            </p>
                        </div>
                    )}
                />
                <Project
                    uid="hoof"
                    title="Hoof!"
                    imageSrc="/assets/hoof.png"
                    slugline="Hoof is a singleplayer game designed for Rainbow Jam 2018, a Gamejam promoting LGBT+ positiivity."
                    descriptionShort={(
                        <p>In hoof, you play as a young horse who has been kicked out of their herd in Africa for 'non-conformity',
                            which is left vauge to allow the player to play the game with whatever LGBT+ identity they wish.</p>
                    )}
                    descriptionExpanded={(
                        <div>
                            <p>Players can roam around the landscape finding other horses who are either alone or who also have
                                been ousted from their herd. The player can then team up with these other horses to create a
                                'Safe Space' for rejected horses.</p>
                            <p>I worked alone on this project during the jam, modelling the character and environment assets
                                in <a className="text-warning" href="http://cubik.studio">Cubik Studio</a> and designing the environment/animations/gameplay in Unity.</p>
                            <p>After the Jam voting, audio was added, created by one of my friends.</p>
                            <p>
                                Play the game today at <a href="https://anniekennedy.itch.io/hoof">https://anniekennedy.itch.io/hoof</a>
                            </p>
                        </div>
                    )}
                />
            </CardGroup>
            <CardGroup>
                <Project
                    uid="deno_secret_santa"
                    title="Secret Santa Algorithm"
                    imageSrc="https://deno.land/logo.svg"
                    slugline="The secret Santa algorithm is a Deno module which allows the user to generate Secret Santa style pairings"
                    descriptionShort={(
                        <div>
                            The module can be viewed at <a href="https://deno.land/x/secret_santa">https://deno.land/x/secret_santa</a>
                        </div>
                    )}
                    // descriptionExpanded={()}
                />
                <Project
                    uid="coming_soon_2"
                    title="Coming soon..."
                    imageSrc="/assets/318x180.svg"
                    slugline="The details for this project will be coming soon..."
                    descriptionShort={(<p>Coming Soon...</p>)}
                    // descriptionExpanded={()}
                />
            </CardGroup>
        </div>
    );
}