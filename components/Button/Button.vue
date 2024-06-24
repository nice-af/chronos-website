<template>
  <component
    :is="component"
    :class="{
      [button.container]: true,
      [button.isSecondary]: variant === 'secondary',
      [button.isPrimary]: variant === 'primary',
      [button.isPill]: isPill,
    }">
    <span>{{ label }}</span>
    <slot name="icon" />
  </component>
</template>


<script setup lang="ts">
interface ButtonBaseProps {
  label: string;
  icon?: Element;
  variant?: 'primary' | 'secondary';
  isPill?: boolean;
}
interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: never;
}
interface ButtonOnClickProps extends ButtonBaseProps {
  href?: never;
  onClick: string;
}
export type ButtonProps = ButtonLinkProps | ButtonOnClickProps;

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  isPill: false,
});

const component = computed(() => {
  if (typeof (props as any).href !== undefined) {
    return resolveComponent('NuxtLink');
  }
  return 'button';
});

defineExpose({ component });
</script>

<style module="button" lang="scss" src="./Button.scss" />
