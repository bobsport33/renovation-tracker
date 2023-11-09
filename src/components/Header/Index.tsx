import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import { colors } from "@/styles/variables";
import { paragraphLarge, paragraphMedium } from "@/styles/Type";

const HeaderCont = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${colors.red200};

    .header {
        &__container {
            height: 100%;
            padding: 30px 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        &__links {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        &__title {
            ${paragraphLarge}
        }

        &__link {
            ${paragraphMedium}
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            color: ${colors.neutral1000};
            position: relative;

            &::after {
                content: "";
                height: 2px;
                width: 0%;
                position: absolute;
                bottom: 0;
                right: 0;
                background-color: ${colors.neutral1000};
                transition: width 0.3s;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }

            &--signout {
                border: none;
                padding: 8px;
                border-radius: 8px;
                background-color: ${colors.neutral100};
                transition: background-color 0.3s;

                &::after {
                    display: none;
                }
                &:hover {
                    background-color: ${colors.neutral200};
                    cursor: pointer;
                }
            }
        }
    }
`;

const Header = () => {
    const { data: session } = useSession();

    return (
        <HeaderCont>
            <div className="header__container">
                <Link href="/" className="header__title ">
                    <h6>Renovation Estimator</h6>
                </Link>
                <div className="header__links">
                    {!session && (
                        <Link
                            className="header__link"
                            href="/auth"
                            as="/auth?state=signup"
                        >
                            Sign Up
                        </Link>
                    )}
                    {!session && (
                        <Link
                            className="header__link"
                            href="/auth"
                            as="/auth?state=signin"
                        >
                            Sign In
                        </Link>
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
                        >
                            New Projects
                        </Link>
                    )}
                    {session && (
                        <button
                            className="header__link header__link--signout"
                            onClick={() => signOut()}
                        >
                            Sign out
                        </button>
                    )}
                </div>
            </div>
        </HeaderCont>
    );
};

export default Header;
