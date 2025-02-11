'use client';

import { useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useTranslations } from 'next-intl';

export function WelcomeToast() {
    const { toast } = useToast();
    const t = useTranslations('toast')

    useEffect(() => {
        if (window.innerWidth < 1024 || window.innerHeight < 650) return;

        toast({
            title: t('title'),
            description: t('description'),
            duration: 5000,
            variant: "default",
            action: (
                <ToastAction altText="Go to GitHub">
                    <a
                        href="https://github.com/Pedro-maciel-pinheiro"
                        className="text-white hover:underline hover:text-black hover:dark:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </ToastAction>
            )
        });

    }, [toast, t]);

    return null;
}
