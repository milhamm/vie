import { Link, Text } from "@chakra-ui/react";
import { useRouter, NextRouter } from "next/router";
import NextLink from "next/link";
import * as React from "react";
import Image from "next/image";
import { BOTTOM_NAV_ROUTES } from "routes";
import { Route } from "types/route";

type BottomNavProps = {
  children?: React.ReactNode;
  isHidden?: boolean;
  custom?: boolean;
};

const routeHref: Array<string> = BOTTOM_NAV_ROUTES.map((route) =>
  route.href.substring(1)
);

const NavItem = ({ icon, name, href, asPath }: Route & { asPath: string }) => {
  const isActive = `/${asPath}` === href;

  const currentIcon = isActive
    ? `/icons/${icon}_fill.svg`
    : `/icons/${icon}.svg`;
  return (
    <NextLink href={href}>
      <a>
        <div className="flex justify-center flex-col cursor-pointer rounded-lg">
          <Image alt={name} src={currentIcon} width="24" height="24" />
          <Text color={isActive ? "main.300" : "gray.500"} mt={1} fontSize={10}>
            {name}
          </Text>
        </div>
      </a>
    </NextLink>
  );
};

const BottomNav = ({
  children,
  isHidden = false,
  custom = false,
}: BottomNavProps) => {
  const router: NextRouter = useRouter();
  const mainPathname: string = router.asPath.split("/")[1];
  const isHome: boolean = routeHref.includes(mainPathname);

  if (isHidden) return null;

  return (
    <div className="fixed max-w-[480px] bottom-0 bg-white w-full px-2 py-3 shadow-nav z-50">
      {isHome && !custom ? (
        <div className="flex justify-around w-full">
          {BOTTOM_NAV_ROUTES.map((route, i) => (
            <NavItem key={i} asPath={mainPathname} {...route} />
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default BottomNav;
