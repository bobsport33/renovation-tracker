import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import { colors } from "@/styles/variables";
import { paragraphLarge, paragraphMedium } from "@/styles/Type";
import AddButton from "@/subComponents/AddButton";

const HeaderCont = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${colors.red200};

    .header__container {
        height: 100%;
        padding: 30px 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header__links {
        display: flex;
        gap: 30px;
        align-items: center;
    }

    .header__title {
        ${paragraphLarge}
    }

    .header__link {
        ${paragraphMedium}
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }
`;

const Header = () => {
    const { data: session } = useSession();

    const [newProject, setNewProject] = useState(false);

    const newProjectHandler = () => {
        setNewProject((cur) => !cur);
    };

    return (
        <HeaderCont>
            <div className="header__container">
                <Link href="/" className="header__title ">
                    <h6>Renovation Estimator</h6>
                </Link>
                <div className="header__links">
                    {session && (
                        <button onClick={() => signOut()}>Sign out</button>
                    )}
                    {!session && (
                        <button onClick={() => signIn()}>Sign in</button>
                    )}
                    {session && (
                        <Link className="header__link" href="/projects">
                            Projects
                        </Link>
                    )}
                    {session && (
                        <Link
                            className="header__link"
                            href="/projects/new-project"
                            onClick={newProjectHandler}
                        >
                            New Projects <AddButton />
                        </Link>
                    )}
                </div>
            </div>
        </HeaderCont>
    );
};

export default Header;
