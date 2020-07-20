import styled, { CreateStyled, WithTheme } from '@emotion/styled';
import { Theme } from '@material-ui/core/styles';

export type StyledThemeProps<P = {}> = WithTheme<P, Theme>;
export default styled as CreateStyled<Theme>;
