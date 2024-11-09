'use client'

import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname } from "@/navigation";
import { useParams } from "next/navigation";
import clsx from "clsx";
import { useRouter } from "@/i18n/routing";
import style from '../_lib/common/ui/shared/Header/Header.module.scss';
import mediaStyle from '../_lib/common/ui/shared/Header/HeaderMedia.module.scss';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }

  return (
    <>
      <label
        className={clsx(
          'relative text-gray-400',
          isPending && 'transition-opacity [&:disabled]:opacity-30'
        )}
      ></label>
      <select
        className={`${style.header_lang} ${mediaStyle.header_lang}`}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        aria-label="lng-select"
      >
        {children}
      </select>
    </>
  )
}