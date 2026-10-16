
-- Minimal table privileges for authenticated FireNexus users.
-- RLS policies remain the row-level authorization boundary.

GRANT INSERT, UPDATE
ON TABLE public.organizations
TO authenticated;

GRANT UPDATE
ON TABLE public.memberships
TO authenticated;

GRANT UPDATE
ON TABLE public.profiles
TO authenticated;
