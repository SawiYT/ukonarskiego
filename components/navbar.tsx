'use client';

import { useState } from 'react';
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';
import { ThemeSwitch } from '@/components/theme-switch';
import { HeartFilledIcon, FacebookIcon } from '@/components/icons';
import { Logo } from '@/components/icons';
import { OuiArrowDown } from '@/components/icons';

export const Navbar = () => {
	const [isDokumentyVisible, setIsDokumentyVisible] = useState(false);

	return (
		<NextUINavbar maxWidth='xl' position='sticky' className='z-50'>
			<NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
				<NavbarBrand as='li' className='gap-3 max-w-fit'>
					<NextLink className='flex justify-start items-center gap-1' href='/'>
						<Logo />
						<p className='font-bold text-inherit'>U Konarskiego</p>
					</NextLink>
				</NavbarBrand>
				<ul className='hidden lg:flex gap-4 justify-start ml-2'>
					{siteConfig.navItems.map(item => (
						<NavbarItem
							key={item.href}
							{...(item.label === 'Dokumenty'
								? {
										onMouseEnter: () => setIsDokumentyVisible(true),
										onMouseLeave: () => setIsDokumentyVisible(false),
								  }
								: {})}>
							<NextLink
								className={clsx(
									linkStyles({ color: 'foreground' }),
									'data-[active=true]:text-primary data-[active=true]:font-medium'
								)}
								color='foreground'
								href={item.href}>
								<div className={`flex justify-center items-end ${item.label === 'Dokumenty' ? ' gap-[5px]' : ''}`}>
									{item.label}
									{item.label === 'Dokumenty' ? <OuiArrowDown /> : null}
								</div>
							</NextLink>

							{item.label === 'Dokumenty' && isDokumentyVisible && (
								<div className='flex flex-col absolute p-1'>
									<a
										href='http://www.ukonarskiego.wiara.pl/download/Informacja.pdf'
										target='_blank'
										rel='noopener noreferrer'>
										RODO
									</a>
									<a
										href='http://www.ukonarskiego.wiara.pl/download/Statut_szkoly.pdf'
										target='_blank'
										rel='noopener noreferrer'>
										STATUT
									</a>
								</div>
							)}
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
				<NavbarItem className='hidden lg:flex gap-2'>
					<Link isExternal href={siteConfig.links.facebook} aria-label='Twitter'>
						<FacebookIcon className='text-default-500' />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className='hidden lg:flex'>
					<Button
						isExternal
						as={Link}
						className='text-sm font-normal text-default-600 bg-default-100'
						href={siteConfig.links.edziennik}
						startContent={<HeartFilledIcon className='text-danger' />}
						variant='flat'>
						E-DZIENNIK
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className='lg:hidden basis-1 pl-4' justify='end'>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className='mx-4 mt-2 flex flex-col gap-2'>
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={index === 2 ? 'primary' : index === siteConfig.navMenuItems.length - 1 ? 'danger' : 'foreground'}
								href={item.href}
								size='lg'>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
