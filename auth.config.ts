import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedin = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isOnDashboard) return true;
                return false;
            } else if (isLoggedin) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }
            return true;
        }
    }
} satisfies NextAuthConfig;